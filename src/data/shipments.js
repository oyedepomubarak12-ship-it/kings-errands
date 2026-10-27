// File: src/data/shipments.js

export const shipments = [
  {
    trackingNumber: "KEL1001",
    sender: "Kings Errands",
    recipient: "Adewale Johnson",
    origin: "Ibadan, Oyo State",
    destination: "Lagos, Nigeria",
    estimatedDelivery: "24 October 2026",
    lastUpdate: "22 October 2026",
    status: "In transit",
    updates: [
      {
        status: "Order received",
        description: "The delivery request has been registered.",
        date: "20 October 2026",
      },
      {
        status: "Package processed",
        description: "The parcel has been prepared for dispatch.",
        date: "21 October 2026",
      },
      {
        status: "In transit",
        description: "The parcel is on its way to the destination.",
        date: "22 October 2026",
      },
    ],
  },
  {
    trackingNumber: "KEL1002",
    sender: "Kings Errands",
    recipient: "Chioma Okafor",
    origin: "Lagos, Nigeria",
    destination: "Abuja, Nigeria",
    estimatedDelivery: "23 October 2026",
    lastUpdate: "21 October 2026",
    status: "Package processed",
    updates: [
      {
        status: "Order received",
        description: "The delivery request has been registered.",
        date: "20 October 2026",
      },
      {
        status: "Package processed",
        description: "The parcel has been prepared for dispatch.",
        date: "21 October 2026",
      },
    ],
  },
  {
    trackingNumber: "KEL1003",
    sender: "Kings Errands",
    recipient: "Tunde Bakare",
    origin: "Ibadan, Oyo State",
    destination: "Abeokuta, Ogun State",
    estimatedDelivery: "21 October 2026",
    lastUpdate: "21 October 2026",
    status: "Delivered",
    updates: [
      {
        status: "Order received",
        description: "The delivery request has been registered.",
        date: "19 October 2026",
      },
      {
        status: "Package processed",
        description: "The parcel has been prepared for dispatch.",
        date: "19 October 2026",
      },
      {
        status: "In transit",
        description: "The parcel was dispatched to its destination.",
        date: "20 October 2026",
      },
      {
        status: "Out for delivery",
        description: "The parcel was sent out for final delivery.",
        date: "21 October 2026",
      },
      {
        status: "Delivered",
        description: "The sample record is marked as delivered.",
        date: "21 October 2026",
      },
    ],
  },
];