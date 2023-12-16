import { createSignal, createUniqueId, mergeProps, For, Show } from "solid-js";
import { Arrow, Cross, Dot, Filter as FilterIcon } from "./Icons.tsx";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  createSolidTable,
} from "@tanstack/solid-table";

import type {
  Column,
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingState,
  Table,
} from "@tanstack/solid-table";

import { rankItem } from "@tanstack/match-sorter-utils";

export type TableProps = {
  data: any[];
  footer?: boolean;
  globalSearch?: boolean;
  columnSearch?: boolean;
};

export default function Table(props: TableProps, columns: ColumnDef<any>[]) {
  const [data, setData] = createSignal(props.data);
  const [sorting, setSorting] = createSignal<SortingState>([]);
  const [columnFilters, setColumnFilters] = createSignal<ColumnFiltersState>(
    [],
  );
  const [globalFilter, setGlobalFilter] = createSignal<any>("");
  const [showFilters, setShowFilters] = createSignal(false);

  const merged = mergeProps(
    {
      footer: false,
      globalSearch: true,
      columnSearch: true,
    },
    props,
  );

  const table = createSolidTable({
    get data() {
      return data();
    },
    columns,
    state: {
      get sorting() {
        return sorting();
      },
      get globalFilter() {
        return globalFilter();
      },
      get columnFilters() {
        return columnFilters();
      },
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onSortingChange: setSorting,
    globalFilterFn: fuzzyFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  return (
    <div class="my-6">
      <Show when={merged.globalSearch}>
        <div class="flex items-center">
          <label>
            <span class="sr-only">Search</span>
            <input
              type="text"
              value={globalFilter() ?? ""}
              onChange={(e: { currentTarget: { value: string } }) =>
                setGlobalFilter(String(e.currentTarget.value))
              }
              class="border border-gray-700 shadow rounded p-1 leading-6 text-sm"
              placeholder="Search all columns..."
            />
          </label>
          <button
            onClick={() => setGlobalFilter("")}
            class="!mt-0 bg-transparent cursor-pointer min-w-max rotate-0 ease-in-out duration-100 hover:text-gray-200 hover:rotate-90"
          >
            <Cross width="20" />
          </button>
        </div>
      </Show>

      <table style="margin-top: 1rem;">
        <thead>
          <For each={table.getHeaderGroups()}>
            {(headerGroup) => (
              <tr>
                <For each={headerGroup.headers}>
                  {(header, index) => (
                    <th
                      colSpan={header.colSpan}
                      class={`h-0 align-top ${
                        index() === 0 ? "grow w-full" : "w-fit"
                      } ${header.column.columnDef.meta?.classList}`}
                    >
                      <Show when={!header.isPlaceholder}>
                        <div
                          class={`${
                            header.column.getCanSort()
                              ? "select-none flex flex-col"
                              : undefined
                          } h-full place-content-between`}
                        >
                          <div class="flex items-center min-w-max">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                          </div>
                          {header.column.getCanFilter() &&
                          merged.columnSearch ? (
                            <>
                              <div class="actions !mt-0 flex items-center place-content-between h-4">
                                <FilterIcon
                                  width="20"
                                  class="!mt-0 min-w-max cursor-pointer sm:cursor-default"
                                  onClick={() => {
                                    setShowFilters(!showFilters());
                                  }}
                                />
                                <Show when={header.column.getCanSort()}>
                                  <div class="relative ml-1 !mt-0 w-4 h-4">
                                    <Dot
                                      class="absolute !mt-0 origin-center transition w-4 cursor-pointer"
                                      classList={{
                                        invisible: header.column.getIsSorted(),
                                      }}
                                      onClick={header.column.getToggleSortingHandler()}
                                    />
                                    <Arrow
                                      class="absolute !mt-0 origin-center transition w-4 cursor-pointer"
                                      classList={{
                                        invisible: !header.column.getIsSorted(),
                                        "rotate-0":
                                          header.column.getIsSorted() === "asc",
                                        "rotate-180":
                                          header.column.getIsSorted() ===
                                          "desc",
                                      }}
                                      onClick={header.column.getToggleSortingHandler()}
                                    />
                                  </div>
                                </Show>
                              </div>
                              <div
                                style="margin: 0;"
                                class={`w-full ${
                                  showFilters() ? "sm:!inline-block" : "!hidden"
                                } md:!inline-block`}
                              >
                                <Filter
                                  column={header.column}
                                  table={table}
                                  classList={`w-full grow md:!inline-block`}
                                />
                              </div>
                            </>
                          ) : null}
                        </div>
                      </Show>
                    </th>
                  )}
                </For>
              </tr>
            )}
          </For>
        </thead>
        <tbody>
          <For each={table.getRowModel().rows}>
            {(row) => (
              <tr>
                <For each={row.getVisibleCells()}>
                  {(cell) => (
                    <td>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  )}
                </For>
              </tr>
            )}
          </For>
        </tbody>
        <Show when={merged.footer}>
          <tfoot>
            <For each={table.getFooterGroups()}>
              {(footerGroup) => (
                <tr>
                  <For each={footerGroup.headers}>
                    {(header) => (
                      <th>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.footer,
                              header.getContext(),
                            )}
                      </th>
                    )}
                  </For>
                </tr>
              )}
            </For>
          </tfoot>
        </Show>
      </table>
    </div>
  );
}

function Filter({
  column,
  table,
  classList,
}: {
  column: Column<any, unknown>;
  table: Table<any>;
  classList?: string;
}) {
  const sortedUniqueValues = [
    ...new Set(
      table
        .getPreFilteredRowModel()
        .flatRows.map((row) => row.original[column.id])
        .sort(),
    ),
  ];

  const uniqueId = createUniqueId();

  return (
    <div style="margin: 0;" class="inline-block w-full">
      <datalist id={uniqueId}>
        {sortedUniqueValues.map((value: any) => (
          <option value={value} />
        ))}
      </datalist>
      <div class="flex !mt-1">
        <input
          type="text"
          value={(column.getFilterValue() ?? "") as string}
          onChange={(e) => column.setFilterValue(e.target.value)}
          list={uniqueId}
          placeholder="Search..."
          class={`p-1 my-1 border border-gray-700 shadow rounded leading-4 text-xs ${classList}`}
        />
        <Show when={column.getFilterValue()}>
          <button
            onClick={() => column.setFilterValue("")}
            class="bg-transparent cursor-pointer min-w-max rotate-0 ease-in-out duration-100 hover:text-gray-200 hover:rotate-90"
          >
            <Cross width="16" />
          </button>
        </Show>
      </div>
    </div>
  );
}

const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};
