/* eslint-disable @next/next/no-img-element */
export function Logo(props) {
  return (
    <div>
      <img src="https://assets.pointhub.net/assets/images/logo/primary/logo.png" alt="Pointhub" className="pt-1 h-8 dark:hidden" />
      <img src="https://assets.pointhub.net/assets/images/logo/white/logo.png" alt="Pointhub" className="pt-1 h-8 hidden dark:block" />
    </div>
  )
}
