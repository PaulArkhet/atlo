ALTER TABLE "blogs" ADD COLUMN "thumbnail" varchar;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "main" boolean;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "featured" boolean;--> statement-breakpoint
ALTER TABLE "blogs" ADD COLUMN "edited_at" timestamp DEFAULT now() NOT NULL;