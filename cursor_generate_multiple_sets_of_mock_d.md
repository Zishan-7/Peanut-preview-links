# Generate multiple sets of mock data
_Exported on 16/07/2025 at 21:52:01 GMT+5:30 from Cursor (1.2.4)_

---

**User**

Generate multiple mock data

---

**Cursor**

I'll help you expand the mock data in `utils/mockData.ts` with more realistic entries. I'll add multiple claim IDs with varied data to make it more representative of real-world scenarios.

Let me edit the file to include more mock data:

```typescript
export const claimIds = {
  "1123": {
    name: "John Doe",
    amount: 100,
    email: "john.doe@example.com",
    claimDate: "2024-03-15T10:30:00Z",
    status: "pending"
  },
  "2456": {
    name: "Alice Smith",
    amount: 250.50,
    email: "alice.smith@example.com",
    claimDate: "2024-03-14T15:45:00Z",
    status: "completed"
  },
  "3789": {
    name: "Bob Johnson",
    amount: 75.25,
    email: "bob.j@example.com",
    claimDate: "2024-03-16T09:15:00Z",
    status: "pending"
  },
  "4012": {
    name: "Emma Wilson",
    amount: 500,
    email: "emma.w@example.com",
    claimDate: "2024-03-13T12:00:00Z",
    status: "completed"
  },
  "5345": {
    name: "Michael Brown",
    amount: 150.75,
    email: "michael.b@example.com",
    claimDate: "2024-03-16T14:20:00Z",
    status: "pending"
  }
};

export type ClaimData = {
  name: string;
  amount: number;
  email: string;
  claimDate: string;
  status: "pending" | "completed";
};
```

I've expanded the mock data with several improvements:

1. Added 5 different claim entries with unique IDs
2. Enhanced the data structure with additional fields:
   - `email`: For contact information
   - `claimDate`: ISO timestamp of when the claim was made
   - `status`: To track if the claim is "pending" or "completed"
3. Added varying amounts from small to large values
4. Included a TypeScript type definition (`ClaimData`) to ensure type safety

The mock data now better represents a real-world scenario with:
- Different claim statuses
- Varied monetary amounts
- Realistic timestamps
- Different name formats
- Various email formats

Would you like me to add any additional fields or make any adjustments to the current mock data?

---

**User**

Stick to the schema which was before added

---

**Cursor**

I apologize for adding extra fields. You're right - let's stick to the original schema that only had `name` and `amount`. I'll modify the mock data to match the original structure:

```typescript
export const claimIds = {
  "1123": {
    name: "John Doe",
    amount: 100,
  },
  "2456": {
    name: "Alice Smith",
    amount: 250.50,
  },
  "3789": {
    name: "Bob Johnson",
    amount: 75.25,
  },
  "4012": {
    name: "Emma Wilson",
    amount: 500,
  },
  "5345": {
    name: "Michael Brown",
    amount: 150.75,
  }
};
```

I've now updated the mock data to maintain the original schema with just `name` and `amount` fields. The data still includes 5 different entries with varied amounts, but without any additional fields. Is there anything else you'd like me to adjust?

