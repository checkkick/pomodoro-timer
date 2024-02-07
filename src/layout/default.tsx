import { Navigation } from "@/components/layout/navigation";
import { ReactElement } from "react";

export default function DefaultLayout({ children }: { children: ReactElement }) {
   return (
      <>
         <Navigation />
         <main>{children}</main>
      </>
   );
}