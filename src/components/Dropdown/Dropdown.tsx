import React, { useState, useEffect, useRef } from 'react'

import { Rect, hasParentElement } from './dropdownHelper'
import { createPortal } from 'react-dom'

type DropdownContextType = {
  active: boolean
  triggerRect: Rect
  onClickTrigger: (rect: Rect) => void
  onClickCloser: () => void
  DropdownContentRoot: React.FC<{ children: React.ReactNode }>
}

const initialRect = { top: 0, right: 0, bottom: 0, left: 0 }

export const DropdownContext = React.createContext<DropdownContextType>({
  active: false,
  triggerRect: initialRect,
  onClickTrigger: () => {},
  onClickCloser: () => {},
  DropdownContentRoot: () => null,
})

export const Dropdown: React.FC<{}> = ({ children }) => {
  const [active, setActive] = useState(false)
  const [triggerRect, setTriggerRect] = useState<Rect>(initialRect)

  const element = useRef(document.createElement('div')).current

  useEffect(() => {
    const onClickBody = (e: any) => {
      if (hasParentElement(e.target, element)) return
      setActive(false)
    }

    document.body.appendChild(element)
    document.body.addEventListener('click', onClickBody, false)

    return () => {
      document.body.removeChild(element)
      document.body.removeEventListener('click', onClickBody, false)
    }
  }, [element])

  // This is the root container of a dropdown content located in outside the DOM tree
  const DropdownContentRoot = (props: { children: React.ReactNode }) => {
    if (!active) return null
    return createPortal(props.children, element)
  }

  return (
    <DropdownContext.Provider
      value={{
        active,
        triggerRect,
        onClickTrigger: rect => {
          const newActive = !active
          setActive(newActive)
          if (newActive) setTriggerRect(rect)
        },
        onClickCloser: () => setActive(false),
        DropdownContentRoot,
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}
