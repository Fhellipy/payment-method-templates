interface BusinessLayoutProps {
  params: {
    businessID: string;
  };
  children: React.ReactNode;
}

function BusinessLayout({
  children,
  params,
}: BusinessLayoutProps): JSX.Element {
  return (
    <>
      <link rel="stylesheet" href={`/api/custom-theme/${params.businessID}`} />
      {children}
    </>
  );
}

export default BusinessLayout;
