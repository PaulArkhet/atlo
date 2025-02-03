import { Booking } from "../../../../schemas/bookings";
import { ArgumentTypes, client, ExtractData } from "./client";
import {
  queryOptions,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

type CreateBookingArgs = ArgumentTypes<
  typeof client.api.v0.bookings.$post
>[0]["json"];

type SerializedBooking = ExtractData<
  Awaited<ReturnType<typeof client.api.v0.bookings.$get>>
>["bookings"][number];

function mapSerializedBookingToSchema(
  SerializedBooking: SerializedBooking
): Booking {
  return {
    ...SerializedBooking,
    createdAt: new Date(SerializedBooking.createdAt),
  };
}

async function createBooking(args: CreateBookingArgs) {
  console.log("creating Booking");
  const res = await client.api.v0.bookings.$post({ json: args });
  if (!res.ok) {
    console.log("Error creating Booking");
    throw new Error("Error creating Booking");
  }
  const result = await res.json();
  console.log("Parsed API Response:", result);
  return mapSerializedBookingToSchema(result.booking);
}

export const useCreateBookingMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createBooking,
    onSettled: (args) => {
      console.log(args);
      if (!args) return console.log(args, "create args, returning");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
};

async function getAllBookings() {
  const res = await client.api.v0.bookings.$get();
  if (!res.ok) {
    throw new Error("Failed to get all Bookings");
  }
  const { bookings } = await res.json();
  return bookings.map(mapSerializedBookingToSchema);
}

export const getAllBookingsQueryOptions = queryOptions({
  queryKey: ["bookings"],
  queryFn: getAllBookings,
});
