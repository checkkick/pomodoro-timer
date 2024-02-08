import { Navigation } from "@/components/Layout/Navigation";
import { ReactElement } from "react";

export default function DefaultLayout({ children }: { children: ReactElement }) {
   return (
      <>
         <Navigation />
         <main>{children}</main>
      </>
   );
}