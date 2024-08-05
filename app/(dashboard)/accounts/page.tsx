"use client"

import { Plus } from "lucide-react";

import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

import { DataTable } from "@/components/DataTable";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { Payment, columns } from "./columns";

const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "728ed52f",
        amount: 200,
        status: "success",
        email: "a@example.com",
    },
]

const AccountsPage = () => {
    const newAccount = useNewAccount();

    return (
        <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
            <Card className="border-none drop-shadow-sm">
                <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between">    
                    <CardTitle className="text-xl line-clamp-1">Account&apos;s Page</CardTitle>
                    <Button size="sm" onClick={newAccount.onOpen}>
                        <Plus className="size-4 mr-2"/>
                        Add new
                    </Button>
                </CardHeader>

                <CardContent>
                    <DataTable columns={columns} data={data} filterKey="email" onDelete={() => {}} disabled={false} />
                </CardContent>
            </Card>
        </div>
    );
};

export default AccountsPage
