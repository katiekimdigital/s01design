// /v2 has been promoted to the main site at `/`. Redirect any old links.
import { redirect } from 'next/navigation'

export default function V2Redirect() {
  redirect('/')
}
