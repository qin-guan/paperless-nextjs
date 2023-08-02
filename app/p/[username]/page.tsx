import ProfileActionsButtonGroup from "@/components/ProfileActionsButtonGroup"
import { Profile, profileStorage } from "@/lib/profile"

export const runtime = 'edge'

export default async function Home({ params }: { params: { username: string } }) {
  const data = await profileStorage.getItem<Profile>(params.username)

  console.log(data)

  return (
    <main className="p-6 container mx-auto">
      {data ? (
        <>
          <section className="mt-10">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              {data.namePrefix} {data.firstName} {data.lastName}
            </h1>
            <p className="text-lg leading-7 [&:not(:first-child)]:mt-2 pb-4 border-b">
              {data.jobTitle}, {data.companyName}
            </p>
          </section>

          <section className="mt-4 space-y-4">
            <div>
              <small className="text-sm font-medium leading-none">
                Email address
              </small>
              <p className="text-sm text-muted-foreground">
                {data.email}
              </p>
            </div>

            <div>
              <small className="text-sm font-medium leading-none">
                Company address
              </small>
              <p className="text-sm text-muted-foreground">
                {data.companyAddress}
              </p>
            </div>

            <div>
              <small className="text-sm font-medium leading-none">
                Phone number
              </small>
              <p className="text-sm text-muted-foreground">
                {data.phoneNumber}
              </p>
            </div>
          </section>

          <section className="mt-16 space-x-2">
            <ProfileActionsButtonGroup username={params.username} />
          </section>
        </>
      ) : (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          No data available
        </h1>
      )}
    </main>
  )
}
