"use client";
import { Button } from "@repo/ui/components/button";
import React from "react";

export default function ShowAlert() {
  return (
    <Button onClick={() => alert("Hello from your web app!")}>
      Open alert
    </Button>
  );
}
