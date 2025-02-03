import { Registration } from "../../../../schemas/registrations";
import { ArgumentTypes, client, ExtractData } from "./client";
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

type CreateRegistrationArgs = ArgumentTypes<
  typeof client.api.v0.registrations.$post
>[0]["json"];

type SerializedRegistration = ExtractData<
  Awaited<ReturnType<typeof client.api.v0.registrations.$get>>
>["registrations"][number];

function mapSerializedRegistrationToSchema(
  SerializedRegistration: SerializedRegistration
): Registration {
  return {
    ...SerializedRegistration,
    createdAt: new Date(SerializedRegistration.createdAt),
  };
}

async function createRegistration(args: CreateRegistrationArgs) {
  console.log("creating Registration");
  const res = await client.api.v0.registrations.$post({ json: args });
  if (!res.ok) {
    console.log("Error creating Registration");
    throw new Error("Error creating Registration");
  }
  const result = await res.json();
  console.log("Parsed API Response:", result);
  return mapSerializedRegistrationToSchema(result.registration);
}

export const useCreateRegistrationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createRegistration,
    onSettled: (args) => {
      console.log(args);
      if (!args) return console.log(args, "create args, returning");
      queryClient.invalidateQueries({ queryKey: ["registrations"] });
    },
  });
};

async function getAllRegistrations() {
  const res = await client.api.v0.registrations.$get();
  if (!res.ok) {
    throw new Error("Failed to get all Registrations");
  }
  const { registrations } = await res.json();
  return registrations.map(mapSerializedRegistrationToSchema);
}

export const getAllRegistrationsQueryOptions = queryOptions({
  queryKey: ["registrations"],
  queryFn: getAllRegistrations,
});
