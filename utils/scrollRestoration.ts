/**
 * SCROLL RESTORATION UTILITIES
 * ════════════════════════════════════════════════════════════════════════════
 * Handles scroll position preservation across page navigations using sessionStorage.
 * This ensures users return to their previous scroll position when using browser back.
 */

const SCROLL_POSITION_KEY = 'flexplay_scroll_position'
const NAVIGATION_STACK_KEY = 'flexplay_navigation_stack'

/**
 * Save the current scroll position to sessionStorage
 * Called before navigating away from a page
 */
export const saveScrollPosition = (): void => {
  if (typeof window === 'undefined') return

  const scrollY = window.scrollY

  sessionStorage.setItem(SCROLL_POSITION_KEY, JSON.stringify(scrollY))
}

/**
 * Get the saved scroll position from sessionStorage
 * Called after navigating back to a page
 */
export const getSavedScrollPosition = (): number | null => {
  if (typeof window === 'undefined') return null

  const saved = sessionStorage.getItem(SCROLL_POSITION_KEY)
  return saved ? JSON.parse(saved) : null
}

/**
 * Clear the saved scroll position from sessionStorage
 * Called after restoring scroll or when navigating to a new page intentionally
 */
export const clearScrollPosition = (): void => {
  if (typeof window === 'undefined') return

  sessionStorage.removeItem(SCROLL_POSITION_KEY)
}

/**
 * Restore the scroll position with optional smooth behavior
 * @param position - The scroll Y position to restore to
 * @param smooth - Whether to use smooth scrolling (default: true)
 */
export const restoreScrollPosition = (position: number, smooth: boolean = true): void => {
  if (typeof window === 'undefined') return

  // Use requestAnimationFrame to ensure DOM is ready
  requestAnimationFrame(() => {
    window.scrollTo({
      top: position,
      behavior: smooth ? 'auto' : 'auto', // Use 'auto' for immediate, no 'smooth' to avoid animation
    })
  })
}

/**
 * Restore scroll with a fallback behavior
 * If no saved position exists, scroll to a target element or top of page
 * @param fallbackElementId - Optional element ID to scroll to if no saved position
 */
export const restoreOrFallback = (fallbackElementId?: string): void => {
  if (typeof window === 'undefined') return

  const saved = getSavedScrollPosition()

  if (saved !== null && saved > 0) {
    // Restore saved position
    restoreScrollPosition(saved, false)
    clearScrollPosition()
  } else if (fallbackElementId) {
    // Scroll to fallback element
    const element = document.getElementById(fallbackElementId)
    if (element) {
      requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: 'auto' })
      })
    }
  }
  // If neither saved position nor fallback element, stay at top (default browser behavior)
}

/**
 * Track navigation using router events
 * Saves scroll position before navigation, restores it after
 * Usage: call this once in your root layout or main page component
 */
export const setupScrollRestoration = (): (() => void) => {
  if (typeof window === 'undefined') return () => {}

  // Save scroll position when page is about to unload (browser back button)
  const handleBeforeUnload = () => {
    saveScrollPosition()
  }

  // Listen for page visibility changes to detect navigation
  const handleVisibilityChange = () => {
    if (document.hidden) {
      saveScrollPosition()
    }
  }

  // Fallback: save on scroll for frequent updates
  let scrollTimeout: NodeJS.Timeout
  const handleScroll = () => {
    clearTimeout(scrollTimeout)
    scrollTimeout = setTimeout(() => {
      saveScrollPosition()
    }, 1000)
  }

  // For Next.js app router, use popstate event to detect back/forward
  const handlePopState = () => {
    saveScrollPosition()
  }

  window.addEventListener('beforeunload', handleBeforeUnload)
  window.addEventListener('visibilitychange', handleVisibilityChange)
  window.addEventListener('scroll', handleScroll)
  window.addEventListener('popstate', handlePopState)

  // Return cleanup function
  return () => {
    window.removeEventListener('beforeunload', handleBeforeUnload)
    window.removeEventListener('visibilitychange', handleVisibilityChange)
    window.removeEventListener('scroll', handleScroll)
    window.removeEventListener('popstate', handlePopState)
  }
}
