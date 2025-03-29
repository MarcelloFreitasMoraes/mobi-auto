export interface HomeProps {
  searchParams: Promise<{
    mark: string;
    model: string;
    year: string;
  }>;
}

export interface ResultProps {
  searchParams: Promise<{
    mark: string;
    model: string;
    year: string;
  }>;
}
