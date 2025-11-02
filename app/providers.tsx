"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
    return (
        <CacheProvider>
            <ColorModeScript
                initialColorMode="system"
                key="chakra-ui-no-flash"
                storageKey="chakra-ui-color-mode"
            />
            <ChakraProvider>{children}</ChakraProvider>
        </CacheProvider>
    );
}
