"use client";

import React, { useState } from "react";
import { use } from "react"; // Import the `use` function from React
import ProjectHeader from "@/app/projects/ProjectHeader";
import Board from "../BoardView";
import List from "../ListView";
import Timeline from "../TimeLineView/Index";
import Table from "../TableView";
import ModalNewTask from "@/components/ModalNewTask";

type Props = {
  params: Promise<{ id: string }>; // `params` is now a Promise
};

const Project = ({ params }: Props) => {
  const { id } = use(params); // Unwrap the Promise with `use`

  const [activeTab, setActiveTab] = useState("Board");
  const [isModalNewTaskOpen, setIsModalNewTaskOpen] = useState(false);

  console.log("Unwrapped Project ID:", id);

  return (
    <div>
      <ModalNewTask
        isOpen={isModalNewTaskOpen}
        onClose={()=> setIsModalNewTaskOpen(false)}
      />
      <ProjectHeader activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Board" && (
        <Board id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "List" && (
        <List id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Timeline" && (
        <Timeline id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
      {activeTab === "Table" && (
        <Table id={id} setIsModalNewTaskOpen={setIsModalNewTaskOpen} />
      )}
    </div>
  );
};

export default Project;
