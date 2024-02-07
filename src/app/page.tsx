'use client';
import Image from 'next/image';
import styles from './page.module.css';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Button type='primary' onClick={() => router.push('/home')}>
        To home
      </Button>
    </>
  );
}
