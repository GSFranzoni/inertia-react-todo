import React, { MutableRefObject, useRef } from 'react';
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react';

type AppConfirmationDialogProps = {
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  onClose: () => void;
};

const AppConfirmationDialog: React.FC<AppConfirmationDialogProps> = ({
  title,
  message,
  onConfirm,
  onCancel = () => {},
  isOpen,
  onClose,
}) => {
  const cancelRef = useRef() as MutableRefObject<HTMLButtonElement>;

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>

          <AlertDialogBody>{message}</AlertDialogBody>

          <AlertDialogFooter>
            <Button
              ref={cancelRef}
              onClick={() => {
                onCancel();
                onClose();
              }}
            >
              Cancel
            </Button>
            <Button
              colorScheme="red"
              onClick={() => {
                onConfirm();
                onClose();
              }}
              ml={3}
            >
              Confirm
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};

export default AppConfirmationDialog;
