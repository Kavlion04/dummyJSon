import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const LogoutModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Logout Confirmation</DialogTitle>
          <DialogDescription>
            Are you sure you want to logout? You will need to login again to
            access your account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex gap-2 sm:gap-0">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={onConfirm}>
            Logout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
