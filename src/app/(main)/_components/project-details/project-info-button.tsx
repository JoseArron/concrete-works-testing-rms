"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    Building2,
    Factory,
    FilePenLine,
    HardHat,
    Info,
    MapPinned,
    TriangleAlert,
} from "lucide-react";
import { useState } from "react";
import type Project from "./interface";

export default function ProjectInfoButton({ project }: { project: Project }) {
    const [isDetailsOpen, setIsDetailsOpen] = useState(false);
    return (
        <>
            <Button
                variant="outline"
                size="default"
                className="flex w-[110px] items-center gap-1 px-2 py-1 text-xs text-gray-700 sm:w-[142px] sm:gap-2 sm:text-sm md:text-sm"
                onClick={() => setIsDetailsOpen(true)}
            >
                <Info className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                Project Details
            </Button>
            <Dialog
                open={isDetailsOpen}
                onOpenChange={setIsDetailsOpen}
            >
                <DialogContent>
                    <DialogHeader className="flex justify-center px-4 py-1">
                        <DialogTitle>Project Details</DialogTitle>
                    </DialogHeader>
                    <div className="w-full space-y-4 p-4">
                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <Building2 className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Name
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.contractName}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <FilePenLine className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contract Id
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.contractId}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <Factory className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Contractor
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.contractorName}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <MapPinned className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Location
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.location}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <TriangleAlert className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Limits
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.limits}
                                </p>
                            </div>
                        </div>

                        <div className="flex w-full items-center gap-2">
                            <div className="flex-col">
                                <div className="flex flex-row items-center">
                                    <HardHat className="h-5 w-5" />
                                    <span className="ml-2 font-bold whitespace-nowrap">
                                        Material Engineer
                                    </span>
                                </div>
                                <p className="flex-1 truncate pl-7 text-wrap">
                                    {project.materialsEngineer}
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
