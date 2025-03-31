import { ResultProps } from "@/@types/page";
import { fetchFipeYear } from "@/hooks/useFipeData";
import { Box, Card, Chip, Typography } from "@mui/material";
import Container from "@mui/material/Container";
import Link from "next/link";
import React from "react";

const Result: React.FC<ResultProps> = async ({ searchParams }) => {
  const { mark, model, year } = await searchParams;
  let yearData = null;
  if (mark && model && year) {
    yearData = await fetchFipeYear({ mark, model, year });
  }

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Card
        variant="outlined"
        sx={{
          backgroundColor: 'secondary.light',
          padding: 15,
          borderRadius: "10px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            textAlign: "center",
          }}
        >
            <Typography variant="h4" fontWeight={'bold'}>Tabela Fipe: Preço {yearData.Modelo}</Typography>
          <Chip
            label={yearData.Valor}
            sx={{
              backgroundColor: 'secondary.dark',
              color: 'primary.light',
              fontWeight: 700,
              fontSize: "18px",
              marginTop: "10px",
            }}
          />
          <Typography variant="h5">
            Este é preço de compra do veículo
          </Typography>
        </Box>
      </Card>
      <Link href="/" style={{ textDecoration: "none", marginTop: "20px" }}>
        Voltar
      </Link>
    </Container>
  );
};

export default Result;
