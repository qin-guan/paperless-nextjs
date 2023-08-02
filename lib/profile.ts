import { createStorage, Storage } from "unstorage"
import cloudflareKVBindingDriver from "unstorage/drivers/cloudflare-kv-binding";

export type Profile = {
  username: string
  password: string

  namePrefix: string
  firstName: string
  lastName: string

  companyName: string
  companyAddress: string

  jobTitle: string
  email: string
  phoneNumber: string
} & {  // For unstorage meta
  [key: string]: string
}

const globalForProfileStorage = globalThis as unknown as {
  profileStorage: Storage | undefined
}

export const profileStorage = globalForProfileStorage.profileStorage ?? createStorage(process.env.NODE_ENV === 'production' ? {
  driver: cloudflareKVBindingDriver({
    binding: process.env.KV_PAPERLESS
  })
} : undefined)

if (process.env.NODE_ENV !== 'production') globalForProfileStorage.profileStorage = profileStorage
