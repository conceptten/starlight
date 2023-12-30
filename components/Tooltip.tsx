import { children } from "solid-js";

export type TooltipProps = {
  tooltip: string;
  children: any;
  width?: number;
};

export default function Tooltip(props: TooltipProps) {
  return (
    <div class="relative inline-block group">
      {props.children}
      <span
        class={`${
          props.width ? "w-" + props.width : "w-24"
        } invisible text-center px-1 py-0 absolute z-10 bg-gray-900 dark:bg-gray-400 text-gray-400 dark:text-gray-900 rounded group-hover:visible text-white`}
      >
        {props.tooltip}
      </span>
    </div>
  );
}
