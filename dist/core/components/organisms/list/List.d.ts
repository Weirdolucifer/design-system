/// <reference types="react" />
import { ExternalHeaderProps } from '../grid/Header';
import { Data, Schema, GridProps, fetchDataFn, RowData } from '../grid';
interface SyncProps {
    data: Data;
    schema: Schema;
}
interface AsyncProps {
    fetchData: fetchDataFn;
}
interface SharedListProps {
    type?: GridProps['type'];
    size?: GridProps['size'];
    withHeader?: boolean;
    headerProps?: ExternalHeaderProps;
    withCheckbox?: GridProps['withCheckbox'];
    withPagination?: GridProps['withPagination'];
    paginationType?: GridProps['paginationType'];
    pageSize?: GridProps['pageSize'];
    loaderSchema?: GridProps['loaderSchema'];
    onRowClick?: GridProps['onRowClick'];
    onSelect?: (rowIndex: number[], selected: boolean, allSelected: RowData[]) => void;
}
declare type SyncListProps = SyncProps & SharedListProps;
declare type AsyncListProps = AsyncProps & SharedListProps;
export declare type ListProps = (AsyncListProps | SyncListProps);
export declare const List: (props: ListProps) => JSX.Element;
export default List;