import * as React from 'react'
export declare type TableGroup = 'head' | 'body'
export declare type TableGroupContextValue = {
  group: TableGroup
}
export declare const TableGroupContext: React.Context<TableGroupContextValue>
export declare type Props = {
  children?: React.ReactNode
  className?: string
}
export declare const Table: (props: Props) => JSX.Element
