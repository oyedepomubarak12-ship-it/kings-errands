
export const demoShipments = {
  KEL1001: {
    trackingNumber: "KEL1001",
    status: "In Transit",
    statusKey: "transit",
    description: "This demonstration parcel is shown as moving towards its destination.",
    pickup: "Pickup location example",
    destination: "Destination example",
    estimatedDelivery: "Not available in demo",
    progress: 60,
    events: [
      {
        title: "Shipment registered",
        detail: "A demonstration tracking record was created.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "Parcel picked up",
        detail: "The demonstration parcel was marked as picked up.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "In transit",
        detail: "The demonstration parcel is travelling towards its destination.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "Out for delivery",
        detail: "The parcel is awaiting this next demonstration stage.",
        time: "Pending demo",
        completed: false,
      },
      {
        title: "Delivered",
        detail: "The parcel is awaiting this final demonstration stage.",
        time: "Pending demo",
        completed: false,
      },
    ],
  },

  KEL1002: {
    trackingNumber: "KEL1002",
    status: "Processing",
    statusKey: "processing",
    description: "This demonstration parcel is being prepared for dispatch.",
    pickup: "Pickup location example",
    destination: "Destination example",
    estimatedDelivery: "Not available in demo",
    progress: 25,
    events: [
      {
        title: "Shipment registered",
        detail: "A demonstration tracking record was created.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "Processing",
        detail: "The demonstration parcel is being prepared.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "In transit",
        detail: "The parcel is awaiting this next demonstration stage.",
        time: "Pending demo",
        completed: false,
      },
      {
        title: "Out for delivery",
        detail: "The parcel is awaiting this demonstration stage.",
        time: "Pending demo",
        completed: false,
      },
      {
        title: "Delivered",
        detail: "The parcel is awaiting this final demonstration stage.",
        time: "Pending demo",
        completed: false,
      },
    ],
  },

  KEL1003: {
    trackingNumber: "KEL1003",
    status: "Delivered",
    statusKey: "delivered",
    description: "This demonstration record shows a completed delivery.",
    pickup: "Pickup location example",
    destination: "Destination example",
    estimatedDelivery: "Delivered — demo record",
    progress: 100,
    events: [
      {
        title: "Shipment registered",
        detail: "A demonstration tracking record was created.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "Parcel picked up",
        detail: "The demonstration parcel was marked as picked up.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "In transit",
        detail: "The demonstration parcel travelled towards its destination.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "Out for delivery",
        detail: "The demonstration parcel was prepared for final delivery.",
        time: "Demo event",
        completed: true,
      },
      {
        title: "Delivered",
        detail: "The demonstration delivery was marked as complete.",
        time: "Demo event",
        completed: true,
      },
    ],
  },
};
