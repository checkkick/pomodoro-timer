import { Navigation } from "@/components/layout/Navigation";
import { ReactElement } from "react";

export default function DefaultLayout({ children }: { children: ReactElement }) {
   return (
      <>
         <Navigation />
         <main>{children}</main>
      </>
   );
}