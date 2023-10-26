interface Params {
  params: { businessID: string }
}

export default function Page({ params }: Params): JSX.Element {
  console.log(params.businessID)

  return <h1>Teste</h1>
}
