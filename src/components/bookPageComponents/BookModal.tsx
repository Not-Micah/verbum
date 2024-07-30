"use client";

import Modal from "../Modal";
import useModal from "../../../hooks/useModal";
import useBookData from "../../../hooks/useActiveBook";
import TopicBadge from "../TopicBadge";

const BookModal = () => {
    const { onClose, isOpen } = useModal();
    const { bookData } = useBookData();

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    }

  return (
    <Modal title="About" isOpen={isOpen} onChange={onChange}>
        <div className="">
            <h3 className='dynamic-subtitle'>{bookData?.book}</h3>
            <p className='dynamic-text text-gray-500 italic'>Written By {bookData?.author}</p>
        </div>
        <p className='dynamic-text'>{bookData?.summary}</p>
        <div className='flex flex-row justify-start items-center flex-wrap
        gap-2'>
            {bookData?.whenToRead.map((read, index) => (
                <TopicBadge data={read} key={index} className="bg-soft-blue/70" />
            ))}
            {bookData?.topics.map((topic, index) => (
                <TopicBadge data={topic} key={index} className="bg-soft-gold/70" />
            ))}
        </div>
    </Modal>
  )
}

export default BookModal;