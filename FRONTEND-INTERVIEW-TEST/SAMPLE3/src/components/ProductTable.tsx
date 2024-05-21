import React from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Image,
} from '@chakra-ui/react';
import formatCurrency from '../utils/formatCurrency';

interface Product {
  title: string;
  price: number;
  image_src: string;
  id: string;
}

interface ProductTableProps {
  products: Product[];
}

export default function ProductTable({ products }: ProductTableProps) {
  return (
    <Table variant="striped" colorScheme="teal">
      <Thead>
        <Tr>
          <Th>Image</Th>
          <Th>Name</Th>
          <Th isNumeric>Price</Th>
        </Tr>
      </Thead>
      <Tbody>
        {products?.map((product) => (
          <Tr key={product.id}>
            <Td>
              <Image
                borderRadius="full"
                boxSize="50px"
                src={product.image_src}
                alt={product.title}
              />
            </Td>
            <Td fontWeight="extrabold">{product.title}</Td>
            <Td isNumeric>{formatCurrency(product.price)}</Td>
          </Tr>
        ))}
      </Tbody>
      <Tfoot>
        <Tr>
          <Th>Total: {products.length}</Th>
        </Tr>
      </Tfoot>
    </Table>
  );
}
