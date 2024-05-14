import "./globals.css";
import { Toaster } from "sonner";
import { Poppins } from "next/font/google";
import { constructMetadata } from "@/lib/utils";
import { EdgeStoreProvider } from "@/lib/edgestore";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { ConvexProvider } from "@/components/providers/convex-provider";

const font = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={font.className}>
        <ConvexProvider>
          <EdgeStoreProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              storageKey="jotion-theme-2"
            >
              <Toaster position="bottom-center" />
              <main className="min-h-screen antialiased overflow-x-hidden">
                {children}
              </main>
            </ThemeProvider>
          </EdgeStoreProvider>
        </ConvexProvider>
      </body>
    </html>
  );
}
