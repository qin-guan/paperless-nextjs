'use client'
import { Button } from "./Button"

export default function ProfileActionsButtonGroup({username}: { username: string }) {
  function save() {
    window.location.href = `https://paperless.pages.dev/api/profile/${username}`
  }

  function share() {
    navigator.clipboard.writeText(`https://paperless-nextjs.pages.dev/p/${username}`)
  }

  return (
    <>
      <Button onClick={save}>
        Save to contacts
      </Button>
      <Button variant="secondary" onClick={share}>
        Share link
      </Button>
    </>
  )
}
