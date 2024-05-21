import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Container,
  HStack,
  Radio,
  RadioGroup,
  Stack,
  Tag,
  TagLabel,
  Text,
} from '@chakra-ui/react';
import ProductTable from '../components/ProductTable';
import { useQuery, useQueryClient } from 'react-query';
import { getAllProducts } from '../services/api';

export default function Collections() {
  const queryClient = useQueryClient();
  const [page, setPage] = React.useState(0);
  const [subscription, setSubscription] = React.useState('');
  const [tagsLike, setTagsLike] = React.useState('');

  const tags = ['Dog', 'Cat', 'Chews', 'Formula', 'Shampoo'];

  const { data, isLoading, isError, isFetching, isPreviousData } = useQuery(
    ['products', page, subscription, tagsLike],
    () => getAllProducts(page, subscription, tagsLike),
    { keepPreviousData: true, staleTime: 5000 }
  );

  // Prefetch the next page!
  React.useEffect(() => {
    if (data?.hasMore) {
      queryClient.prefetchQuery(['projects', page + 1], () =>
        getAllProducts(page + 1, subscription, tagsLike)
      );
    }
  }, [data, page]);

  const products = data;
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (isError) {
    return <Text>Error Loading Data</Text>;
  }
  return (
    <Container maxW={'3xl'} mt={0} centerContent>
      <HStack spacing={4} w="100%">
        <Box width={'30%'}>
          <Text fontSize={'xl'}>Filter</Text>
          <Box mt={4}>
            <Text>Tags</Text>
            {tags.map((tag) => (
              <Tag
                as={Button}
                size="lg"
                colorScheme="red"
                borderRadius="full"
                key={tag}
                my={1}
                mx={2}
                onClick={() => setTagsLike(tag)}
              >
                <Avatar
                  src="https://via.placeholder.com/300x300.png?text=Clear+Eyes+Chews"
                  size="xs"
                  name={tag}
                  ml={-1}
                  mr={2}
                />
                <TagLabel>{tag}</TagLabel>
              </Tag>
            ))}
          </Box>
          <Box mt={4}>
            <Text>Subscriptions</Text>
            <RadioGroup onChange={setSubscription} value={subscription}>
              <Stack direction="row">
                <Radio value="true">Yes</Radio>
                <Radio value="false">No</Radio>
              </Stack>
            </RadioGroup>
          </Box>
        </Box>
        <Stack
          as={Box}
          textAlign="center"
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 36 }}
        >
          <ProductTable products={products} />
          <Box>
            <Box>Current Page: {page + 1}</Box>
            <Button
              onClick={() => setPage((old) => Math.max(old - 1, 0))}
              disabled={page === 0}
            >
              Previous Page
            </Button>{' '}
            <Button
              onClick={() => {
                setPage((old) => (data?.hasMore ? old + 1 : old));
              }}
              disabled={isPreviousData || !data?.hasMore}
            >
              Next Page
            </Button>
          </Box>
        </Stack>
      </HStack>
    </Container>
  );
}
