import { ChevronLeftIcon } from "@chakra-ui/icons";
import { Flex, Image } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link } from "./Link";

export function Header() {
  const [pathname, setPathname] = useState("/")

  useEffect(() => {
    setPathname(window.location.pathname)
    return () => {
      setPathname("/")
    }
  }, [])

  return (
    <Flex
      as="header"
      h={100}
      bg="heading.light"
      w="100%"


    >
      <Flex
        w="100%"
        maxW={1440}
        mx="auto"

        p="0"
        align="center"
        justify="center"
        position="relative"
      >
        {pathname !== "/" && (
          <Link href="/" h="100%" position="absolute" left="4" alignItems="center">
            <ChevronLeftIcon fontSize="32px" color="heading.dark" />
          </Link>
        )}

        <Link href="/" alignItems="center">
          <Image src="/assets/logo.svg" />
        </Link>
      </Flex>
    </Flex>
  )
}