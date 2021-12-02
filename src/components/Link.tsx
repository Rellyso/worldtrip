import NextLink from "next/link";
import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = LinkProps & {
  href: string;
  children: ReactNode;
}

export function Link({ children, href, ...rest }: Props) {
  return (
    <NextLink href={href} passHref>
      <ChakraLink display="flex" _hover={{
        textDecoration: 'none'
      }}
        {...rest}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}