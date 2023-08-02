import { revalidatePath } from "next/cache";
import { Button } from "./Button";

export default function RevalidateButton({ username }: { username: string }) {
  async function revalidate() {
    'use server'

    revalidatePath(`/p/${username}`)
    return true
  }

  return (
    <form action={revalidate}>
      <Button type="submit">Update cache</Button>
    </form>
  )
}
