import { Subscription } from "../../../../schemas/subscriptions";
import { ArgumentTypes, client, ExtractData } from "./client";
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

type CreateSubscriptionArgs = ArgumentTypes<
  typeof client.api.v0.subscriptions.$post
>[0]["json"];

type SerializedSubscription = ExtractData<
  Awaited<ReturnType<typeof client.api.v0.subscriptions.$get>>
>["subscriptions"][number];

function mapSerializedSubscriptionToSchema(
  SerializedSubscription: SerializedSubscription
): Subscription {
  return {
    ...SerializedSubscription,
    createdAt: new Date(SerializedSubscription.createdAt),
  };
}

async function createSubscription(args: CreateSubscriptionArgs) {
  console.log("creating subscription");
  const res = await client.api.v0.subscriptions.$post({ json: args });
  if (!res.ok) {
    console.log("Error creating subscription");
    throw new Error("Error creating subscription");
  }
  const result = await res.json();
  console.log("Parsed API Response:", result);
  return mapSerializedSubscriptionToSchema(result.subscription);
}

export const useCreateSubscriptionMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSubscription,
    onSettled: (args) => {
      console.log(args);
      if (!args) return console.log(args, "create args, returning");
      queryClient.invalidateQueries({ queryKey: ["subscriptions"] });
    },
  });
};

async function getAllSubscriptions() {
  const res = await client.api.v0.subscriptions.$get();
  if (!res.ok) {
    throw new Error("Failed to get all subscriptions");
  }
  const { subscriptions } = await res.json();
  return subscriptions.map(mapSerializedSubscriptionToSchema);
}

export const getAllSubscriptionsQueryOptions = queryOptions({
  queryKey: ["subscriptions"],
  queryFn: getAllSubscriptions,
});
