import { Subscription } from "../../../../schemas/subscriptions";
import { ArgumentTypes, client, ExtractData } from "./client";

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
  console.log("creating prototype");
  const res = await client.api.v0.subscriptions.$post({ json: args });
  if (!res.ok) {
    throw new Error("Error creating prototype");
  }
  const result = await res.json();
  console.log("Parsed API Response:", result);
  return mapSerializedSubscriptionToSchema(result.subscription);
}
