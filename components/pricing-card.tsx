import { Check } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from './ui/card';
import { Button } from './ui/button';

export default function PricingCard() {
  return (
    <Card className=" text-primary w-[350px] text-left md:mt-20 mt-10">
      <CardHeader>
        <CardTitle>Pro Premium VIP Plan</CardTitle>
        <CardDescription>
        Everything you need for your studies
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className=" text-primary text-4xl font-bold mb-8 mt-4">
          $19
          <span className="font-normal text-muted-foreground text-lg">
            /month
          </span>{' '}
        </p>
        <ul>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Access to 1 ebook per month
          </li>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Special curation
          </li>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Unlimited access
          </li>
          <li className="flex gap-2 text-muted-foreground">
            <Check className="w-4 text-green-600" />
            Cancel anytime
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Subscribe Now</Button>
      </CardFooter>
    </Card>
  );
}
