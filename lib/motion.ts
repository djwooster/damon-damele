export const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number]

export function scrollToSection(e: React.MouseEvent, href: string) {
  if (!href.startsWith("/#")) return
  e.preventDefault()
  const id = href.slice(2)

  if (window.location.pathname === "/") {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  } else {
    sessionStorage.setItem("scrollTarget", id)
    window.location.href = "/"
  }
}
