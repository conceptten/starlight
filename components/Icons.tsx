import { mergeProps } from "solid-js";

type IconProps = {
  width?: string;
  class?: string;
  classList?: {
    [k: string]: boolean | undefined;
  };
  onClick?: () => void;
  ariaLabel?: string;
  ariaHidden?: boolean;
};

function defaultProps(props: IconProps): IconProps {
  return mergeProps(
    {
      width: "24",
      classList: undefined,
    },
    props,
  );
}

export function Document(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path d="M9 10h1a1 1 0 1 0 0-2H9a1 1 0 0 0 0 2Zm0 2a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2H9Zm11-3.06a1.3 1.3 0 0 0-.06-.27v-.09c-.05-.1-.11-.2-.19-.28l-6-6a1.07 1.07 0 0 0-.28-.19h-.09a.88.88 0 0 0-.33-.11H7a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8.94Zm-6-3.53L16.59 8H15a1 1 0 0 1-1-1V5.41ZM18 19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5v3a3 3 0 0 0 3 3h3v9Zm-3-3H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2Z" />
    </svg>
  );
}

export function Arrow(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="currentColor"
        d="m12 10.8l-4.6 4.6L6 14l6-6l6 6l-1.4 1.4l-4.6-4.6Z"
      />
    </svg>
  );
}

export function Filter(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="currentColor"
        d="M11 20q-.425 0-.713-.288T10 19v-6L4.2 5.6q-.375-.5-.113-1.05T5 4h14q.65 0 .913.55T19.8 5.6L14 13v6q0 .425-.288.713T13 20h-2Z"
      />
    </svg>
  );
}

export function Trashbin(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon ${merged.class}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="currentColor"
        d="M7 21q-.825 0-1.413-.588T5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .825-.588 1.413T17 21H7ZM17 6H7v13h10V6ZM9 17h2V8H9v9Zm4 0h2V8h-2v9ZM7 6v13V6Z"
      />
    </svg>
  );
}

export function Dimmer(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 64 64"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="currentColor"
        d="M26.89 32.291h-7.592V4.525c0-3.366-5.215-3.366-5.215 0v27.766H6.49c-2.446 0-4.49 2.318-4.49 5.095c0 2.779 2.043 5.098 4.49 5.098h7.593v16.992c0 3.365 5.215 3.365 5.215 0V42.484h7.592c2.449 0 4.491-2.318 4.491-5.098c0-2.778-2.042-5.095-4.491-5.095m22.849 23.57H37.372c-3.847 0-3.847 6.138 0 6.138h12.367c3.848 0 3.848-6.138 0-6.138m1.875-10.772H37.372c-3.847 0-3.847 6.139 0 6.139h14.242c3.848 0 3.848-6.139 0-6.139m1.875-10.772H37.372c-3.847 0-3.847 6.138 0 6.138h16.117c3.848 0 3.848-6.138 0-6.138m1.875-10.772H37.372c-3.847 0-3.847 6.138 0 6.138h17.992c3.848 0 3.848-6.138 0-6.138m0 4.138H37.372c-.77 0-.885-.67-.885-1.068c0-.399.115-1.069.885-1.069h17.992c.771 0 .885.67.885 1.069c0 .398-.114 1.068-.885 1.068m1.875-14.909H37.372c-3.847 0-3.847 6.138 0 6.138h19.867c3.848 0 3.848-6.138 0-6.138m0 4.138H37.372c-.77 0-.885-.67-.885-1.068c0-.399.115-1.069.885-1.069h19.867c.771 0 .885.67.885 1.069c0 .398-.114 1.068-.885 1.068m1.875-14.911H37.372c-3.847 0-3.847 6.138 0 6.138h21.742c3.848 0 3.848-6.138 0-6.138m0 4.138H37.372c-.77 0-.885-.67-.885-1.069c0-.398.115-1.068.885-1.068h21.742c.771 0 .885.67.885 1.068c0 .399-.114 1.069-.885 1.069"
      />
    </svg>
  );
}

export function Relay(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="currentColor"
        d="M1 11h2.17C3.58 9.83 4.69 9 6 9c.65 0 1.25.21 1.74.56l6.7-4.69l1.14 1.63l-6.69 4.7c.07.25.11.52.11.8a3 3 0 0 1-3 3a2.99 2.99 0 0 1-2.83-2H1v-2m22 0v2h-2.17A2.99 2.99 0 0 1 18 15a3 3 0 0 1-3-3a3 3 0 0 1 3-3c1.31 0 2.42.83 2.83 2H23M6 11a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1m12 0a1 1 0 0 0-1 1a1 1 0 0 0 1 1a1 1 0 0 0 1-1a1 1 0 0 0-1-1Z"
      />
    </svg>
  );
}

export function ApproveCheck(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14A1.02 1.02 0 1 0 5.29 13l3.84 3.84a1.001 1.001 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z" />
    </svg>
  );
}

export function Cross(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 16 16"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
      />
    </svg>
  );
}

export function Questionmark(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 16 16"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <g
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
      >
        <circle cx="8" cy="8" r="6.25" />
        <path d="M5.75 6.75c0-1 1-2 2.25-2s2.25 1.034 2.25 2c0 1.5-1.5 1.5-2.25 2m0 2.5v0" />
      </g>
    </svg>
  );
}

export function Dot(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 16 16"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <path
        fill="currentColor"
        d="M8 9.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
      />
    </svg>
  );
}

export function Ethernet(props: IconProps) {
  const merged = defaultProps(props);

  return (
    <svg
      width={merged.width}
      height={merged.width}
      viewBox="0 0 24 24"
      class={`icon${merged.class ? " " + merged.class : ""}`}
      classList={merged.classList}
      onClick={merged.onClick}
      fill="currentColor"
      style="--sl-icon-size: 1em;"
      aria-label={merged.ariaLabel}
      aria-hidden={merged.ariaHidden}
    >
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <rect
          width="7"
          height="5"
          fill="currentColor"
          rx=".6"
          transform="matrix(1 0 0 -1 3 22)"
        />
        <rect
          width="7"
          height="5"
          fill="currentColor"
          rx=".6"
          transform="matrix(1 0 0 -1 8.5 7)"
        />
        <rect
          width="7"
          height="5"
          fill="currentColor"
          rx=".6"
          transform="matrix(1 0 0 -1 14 22)"
        />
        <path d="M6.5 17v-3.5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2V17M12 11.5V7" />
      </g>
    </svg>
  );
}
