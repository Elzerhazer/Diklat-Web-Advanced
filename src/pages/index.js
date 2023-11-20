import React from "react";
import HomeFeatures, { Dashboard } from "../features/home/dashboard";
import MoreCars from "@/features/home/morecars";
import Layout from "@/features/component/layout";
import { useRouter } from "next/router";
import FeaturesCard from "@/features/home/featurescard";
import { Flex } from "@mantine/core";

export default function Home() {


  return (
    <>
    <Layout>
      <Dashboard/>
      <FeaturesCard/>
      <FeaturesCard/>
      <MoreCars/>
    </Layout>
    </>
  ) 
}