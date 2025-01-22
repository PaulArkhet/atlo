import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/thankyoudemo')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/thankyoudemo"!</div>
}
