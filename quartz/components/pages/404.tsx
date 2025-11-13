import { QuartzComponentConstructor } from "../types"

function NotFound() {
  return (
    <article class="popover-hint">
      <p>🦚 Woops, time to look somewhere else. 🦚</p>
    </article>
  )
}

export default (() => NotFound) satisfies QuartzComponentConstructor
