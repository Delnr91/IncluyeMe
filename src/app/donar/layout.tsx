import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donaciones | IncluyeMe",
  description: "Apoya nuestra misión de crear un futuro laboral inclusivo. Tu donación impulsa la tecnología y el acompañamiento que transforma vidas.",
};

export default function DonacionesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}