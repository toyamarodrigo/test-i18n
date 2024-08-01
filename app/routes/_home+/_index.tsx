import type { MetaFunction } from "@remix-run/node";
import { json, useLoaderData } from "@remix-run/react";
import { useTranslation } from "react-i18next";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const clientLoader = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return json({
    data: { id: "1", name: "Test" },
  });
};

export default function Index() {
  const { t } = useTranslation("_home+");
  const { data } = useLoaderData<typeof clientLoader>();
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">{t("WELCOME.TITLE")}</h1>
      <p>Welcome to Remix</p>
      <p>{data?.id}</p>
    </div>
  );
}
