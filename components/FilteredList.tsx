import { createSignal, For, Show } from "solid-js";
import { Arrow, Document, Filter, Trashbin } from "./Icons.tsx";

function FilteredList(props) {
  const [filter, setFilter] = createSignal("");
  const [showFilter, setShowFilter] = createSignal(false);

  const filtered = () => {
    return props.data.filter((item) =>
      item.name.toLowerCase().includes(filter().toLowerCase()),
    );
  };

  return (
    <>
      <label class="mt-6 ps-6 font-bold flex items-center" aria-label="Filter">
        <Filter
          onClick={() => setShowFilter((show) => !show)}
          aria-label="Enable Filter"
          class="inline-block mr-2 cursor-pointer"
          classList={{
            "text-[var(--sl-color-green-high)]": filter() !== "",
            "text-[var(--sl-color-red-high)]": filtered().length === 0,
          }}
        />
        <Show
          when={showFilter()}
          fallback={
            <i style="margin: 0; padding: 0;" class="font-normal text-xs">
              Filter
            </i>
          }
        >
          <input
            type="text"
            value={filter()}
            onInput={(e) => setFilter(e.target.value)}
            class="p-1 my-1 border border-gray-700 shadow rounded leading-4"
          />
          <Show when={filter() !== ""}>
            <Trashbin
              onClick={() => setFilter("")}
              aria-label="Clear Filter"
              class="inline-block ml-2 cursor-pointer"
            />
          </Show>
        </Show>
      </label>
      <ul style="margin-top: 0.75rem;" class="ps-6 list-none ps-6">
        <For each={filtered()}>
          {(item) => (
            <li>
              <a
                href={item.path}
                data-umami-event={`download/list/${item.name}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Show
                  when={item.extension === ".pdf"}
                  fallback={
                    <Arrow
                      width="16"
                      class="inline-block mr-1 rotate-90"
                      ariaHidden={true}
                    />
                  }
                >
                  <Document
                    width="16"
                    ariaHidden={true}
                    class="inline-block mr-1"
                  />
                </Show>
                {item.name}
              </a>
            </li>
          )}
        </For>
      </ul>
    </>
  );
}

export default FilteredList;
