import { Button } from "@/components/Button"
import ProfileActionsButtonGroup from "@/components/ProfileActionsButtonGroup"
import { profileStorage } from "@/lib/profile"

export default async function Home({ params }: { params: { username: string } }) {
  const data = { "username": "qinguan", "password": "test", "namePrefix": "Mr", "firstName": "Guan", "lastName": "Qin", "companyName": "Ngee Ann Polytechnic", "companyAddress": "535 Clementi Rd, Singapore 599489", "jobTitle": "Student", "email": "s10219526@connect.np.edu.sg", "phoneNumber": "+6587784497" }

  return (
    <main className="p-6 container mx-auto">
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
        <ProfileActionsButtonGroup username={params.username}/>
      </section>
    </main>
  )
}
