import { test, expect } from '@playwright/test'

test.describe('Homepage', () => {
  test('loads and displays hero content', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Crestwood Community College/)
    // Hero section should have content from Drupal
    await expect(page.locator('h1').first()).toBeVisible()
  })

  test('navigation links are present', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('nav a[href="/programs"]')).toBeVisible()
    await expect(page.locator('nav a[href="/faculty"]')).toBeVisible()
    await expect(page.locator('nav a[href="/events"]')).toBeVisible()
    await expect(page.locator('nav a[href="/news"]')).toBeVisible()
    await expect(page.locator('nav a[href="/about"]')).toBeVisible()
  })
})

test.describe('Programs', () => {
  test('lists programs from Drupal', async ({ page }) => {
    await page.goto('/programs')
    await expect(page.locator('h1')).toContainText('Programs')
    // Should have program cards from imported content
    await expect(page.getByText('Registered Nursing').first()).toBeVisible()
    await expect(page.getByText('Cybersecurity').first()).toBeVisible()
    await expect(page.getByText('Welding Technology').first()).toBeVisible()
  })

  test('program detail page loads', async ({ page }) => {
    await page.goto('/programs')
    await page.getByText('Registered Nursing').first().click()
    await expect(page.locator('h1')).toContainText('Registered Nursing')
  })
})

test.describe('Faculty', () => {
  test('lists faculty from Drupal', async ({ page }) => {
    await page.goto('/faculty')
    await expect(page.locator('h1')).toContainText('Facult')
    await expect(page.getByText('Dr. Linda Chen').first()).toBeVisible()
    await expect(page.getByText('Carlos Martinez').first()).toBeVisible()
    await expect(page.getByText('Tamika Johnson').first()).toBeVisible()
  })
})

test.describe('Events', () => {
  test('lists events from Drupal', async ({ page }) => {
    await page.goto('/events')
    await expect(page.locator('h1')).toContainText('Events')
    await expect(page.getByText('Spring Open House').first()).toBeVisible()
    await expect(page.getByText('Commencement Ceremony 2026').first()).toBeVisible()
  })
})

test.describe('News', () => {
  test('lists news from Drupal', async ({ page }) => {
    await page.goto('/news')
    await expect(page.locator('h1')).toContainText('News')
    await expect(page.getByText('NSF Grant').first()).toBeVisible()
  })
})

test.describe('Static pages', () => {
  test('about page loads with content', async ({ page }) => {
    await page.goto('/about')
    await expect(page.locator('h1')).toContainText('About')
  })

  test('contact page loads', async ({ page }) => {
    await page.goto('/contact')
    await expect(page).toHaveTitle(/Contact/)
  })
})
