"use client";
import { useForm } from "react-hook-form";
import { Button, Card, Container, Grid, Typography } from "@mui/material";
import { FormsProps, FormData } from "@/@types/forms";
import { CustomController } from "../../components/custom-controller";
import { useRouter } from "next/navigation";

const Forms: React.FC<FormsProps> = ({ data, mark = "", model = "" }) => {
  const router = useRouter();
  const { control, watch, setValue } = useForm<FormData>({
    defaultValues: {
      mark: typeof mark === "string" ? mark : "",
      model: typeof model === "string" ? model : "",
      year: "",
    },
  });

  const selectedMark = watch("mark");
  const selectedModel = watch("model");

  const updateURL = () => {
    const markValue = watch("mark");
    const modelValue = watch("model");
    const yearValue = watch("year");

    const params = new URLSearchParams();
    if (markValue) params.set("mark", markValue);
    if (modelValue) params.set("model", modelValue);
    if (yearValue) params.set("year", yearValue);

    let newURL = "?";
    if (params.get("mark")) newURL += `mark=${params.get("mark")}&`;
    if (params.get("model")) newURL += `model=${params.get("model")}&`;
    if (params.get("year")) newURL += `year=${params.get("year")}&`;

    if (newURL.endsWith("&")) {
      newURL = newURL.slice(0, -1);
    }

    router.push(newURL, { scroll: false });
  };

  const transformOptions = (
    data: { nome: string; codigo: string | number }[]
  ) => data.map((item) => ({ name: item.nome, value: String(item.codigo) }));

  const handleClickRoute = () => {
    const mark = watch("mark");
    const model = watch("model");
    const year = watch("year");

    if (mark && model && year) {
      router.push(`/result?mark=${mark}&model=${model}&year=${year}`);
    }
  };

  const markData = typeof mark === "object" && mark !== null ? mark : null;
  const modelData = typeof model === "object" && model !== null ? model : null;

  return (
    <Container
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        width: "100%",
      }}
    >
      <Card sx={{ width: { xs: "100%", md: "600px" } }}>
        <Grid
          display={"flex"}
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          gap={2}
          padding="20px"
          textAlign="center"
        >
          <Typography variant="h5" fontWeight={700}>
            Tabela Fipe
          </Typography>
          <Typography variant="h6" fontWeight={700}>
            Consulte o valor de um veículo de forma gratuita
          </Typography>
          <Grid
            display={"flex"}
            flexDirection="column"
            gap={2}
            width={"100%"}
            padding={"20px"}
          >
            <CustomController
               name="mark"
               label="Marca"
               options={Array.isArray(data) ? transformOptions(data) : []}
               value={selectedMark}
              onChange={(value: string) => {
                setValue("mark", value);
                setValue("model", "");
                setValue("year", "");
                updateURL();
              }}
              control={control}
            />

            <CustomController
              name="model"
              label="Modelo"
              options={
                markData && markData.modelos
                  ? transformOptions(markData.modelos)
                  : []
              }
              value={selectedModel}
              onChange={(value: string) => {
                setValue("model", value);
                setValue("year", "");
                updateURL(); 
              }}
              disabled={!selectedMark}
              control={control}
            />

            {selectedModel && (
              <CustomController
                name="year"
                label="Ano"
                options={
                  Array.isArray(modelData) ? transformOptions(modelData) : []
                }
                value={watch("year")}
                onChange={(value: string) => {
                  setValue("year", value);
                  updateURL(); 
                }}
                disabled={!selectedModel}
                control={control}
              />
            )}
            <Grid
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={handleClickRoute}
                disabled={!selectedMark || !selectedModel || !watch("year")}
                sx={{
                  backgroundColor: 'primary.dark',
                  color: 'background.paper',
                  fontSize: "14px",
                  width: { xs: "100%", md: "200px" },
                  marginTop: "10px",
                }}
              >
                Consultar Preço
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default Forms;
